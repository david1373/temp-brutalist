import { NextResponse } from 'next/server';

export async function GET() {
  const articles = [{
    id: '1',
    title: 'Test Article',
    content: 'This is a test article'
  }];
  
  return NextResponse.json(articles);
}