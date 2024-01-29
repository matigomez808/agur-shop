
import { NextResponse } from "next/server";
import connectToDatabase from "src/lib/mongodb";
import producto from "src/models/Producto";

export const GET = async (request) => {
  try {
    await connectToDatabase();
    const productos = await producto.find();
    return new NextResponse(JSON.stringify(productos), {status:200})
  } catch(error) {
    return new NextResponse('Error in fetching products' + error, {status:500})
  }
}
