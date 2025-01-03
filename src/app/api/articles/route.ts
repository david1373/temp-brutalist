import { NextResponse } from 'next/server';

export async function GET() {
  const articles = [
    {
      id: '1',
      title: 'Brutalist Architecture Example',
      content: 'This is a test article about brutalist architecture.',
      images: [{
        url: 'https://picsum.photos/800/600',
        caption: 'Example building'
      }],
      source: 'Test',
      date: new Date().toISOString()
    }
  ];
  
  return NextResponse.json(articles);
}