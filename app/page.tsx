export default function Home() {
  return (
    <main style={{
      background: '#4f46e5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    }}>
      <div style={{ textAlign: 'center', color: 'white' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>LocalReach</h1>
        <p style={{ fontSize: '1.25rem' }}>Reach Every Neighborhood on the Internet</p>
      </div>
    </main>
  )
}
