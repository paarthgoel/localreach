import fs from 'fs';
import path from 'path';

export default function Home() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'index.html');
    const html = fs.readFileSync(filePath, 'utf-8');
    
    return (
      <div dangerouslySetInnerHTML={{ __html: html }} />
    );
  } catch {
    return <div>LocalReach - Reach Every Neighborhood on the Internet</div>;
  }
}
