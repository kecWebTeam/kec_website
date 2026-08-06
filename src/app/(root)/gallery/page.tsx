export default function GalleryPage() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      background: 'linear-gradient(135deg, #ffecd2, #fcb69f)'
    }}>
      <h1 style={{fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', color: '#333'}}>
        Gallery
      </h1>
      <p style={{fontSize: '1.125rem', color: '#555'}}>
        Placeholder content for the Gallery page.
      </p>
    </section>
  );
}
