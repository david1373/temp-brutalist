import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('API endpoint hit');
    const articles = [
      {
        id: '1',
        title: 'Brutalist Architecture Example',
        content: 'Sample content about brutalism',
        images: [{ url: 'https://picsum.photos/800/600', caption: 'Example' }],
        source: 'Test',
        date: new Date().toISOString()
      }
    ];
    
    console.log('Returning articles:', articles);
    return NextResponse.json(articles);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
}