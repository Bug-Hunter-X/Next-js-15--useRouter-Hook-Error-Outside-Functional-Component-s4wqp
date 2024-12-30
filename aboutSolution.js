```javascript
// pages/aboutSolution.js
import { useRouter } from 'next/navigation';

export default function About() {
  const router = useRouter();
  
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      {/* Example usage of useRouter - this will now work correctly */}
    </div>
  );
}
```