"use client";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";
import Image from "next/image";

export default function ImageUpload() {
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
        accept: { "image/*": [] },
        maxFiles: 1,
    });

    const image = acceptedFiles[0];
    // console.log(acceptedFiles[0])

    return (
        <div className="max-w-md mx-auto mt-20">
            <div {...getRootProps()} className={`border-4 border-dashed rounded-2xl p-16 text-center cursor-pointer transition ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}>
                <input {...getInputProps()} />
                {
                    image ?
                        <Image src={URL.createObjectURL(image)} alt="preview" className="mx-auto max-h-64 rounded-lg" width={500} height={500} /> :
                        <>
                            <Upload className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                            {isDragActive ? (
                                <p className="text-xl font-bold text-blue-600">Give it up</p>
                            ) : (
                                <p className="text-xl font-medium text-gray-600">
                                    Tag or click on the picture
                                </p>
                            )}
                        </>
                }
            </div>

            {image && (
                <div className="mt-6 text-center">
                    <p className="font-medium text-green-600">
                        Image Ready: {image.name} ({(image.size / 1024).toFixed(0)} KB)
                    </p>
                    <button className="mt-3 px-6 py-3 bg-green-600 text-white rounded-lg cursor-pointer">Upload Now</button>
                </div>
            )}
        </div>
    );
}