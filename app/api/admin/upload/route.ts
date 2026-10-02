import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import fs from "fs/promises";
import path from "path";
import { slugify } from "@/lib/analytics-repository";

const MAX_FILE_SIZE = 15 * 1024 * 1024; // 15MB
const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/webp"];
const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

export async function POST(request: NextRequest) {
  try {
    const isAuth = await isAdminAuthenticated();
    if (!isAuth) {
      return NextResponse.json(
        { error: "Unauthorized. Admin session required." },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No image file provided." },
        { status: 400 }
      );
    }

    // Check size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "File exceeds the 15MB maximum size limit." },
        { status: 400 }
      );
    }

    // Check MIME type
    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: "Unsupported image format. Allowed formats: JPG, JPEG, PNG, WEBP." },
        { status: 400 }
      );
    }

    // Check extension
    const originalName = file.name || "analytics-visual.png";
    const ext = path.extname(originalName).toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      return NextResponse.json(
        { error: `File extension "${ext}" is not supported.` },
        { status: 400 }
      );
    }

    // Target directory: public/uploads/analytics
    const uploadDir = path.join(process.cwd(), "public", "uploads", "analytics");
    await fs.mkdir(uploadDir, { recursive: true });

    const baseName = path.basename(originalName, ext);
    const sanitizedBase = slugify(baseName) || "cricket-analytics";
    const timestamp = Date.now();
    const finalFilename = `${sanitizedBase}-${timestamp}${ext}`;
    const destinationPath = path.join(uploadDir, finalFilename);

    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(destinationPath, buffer);

    const publicUrl = `/uploads/analytics/${finalFilename}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      filename: finalFilename,
      size: file.size
    });
  } catch (error: unknown) {
    console.error("Upload error:", error);
    const message = error instanceof Error ? error.message : "Internal server error during upload.";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
