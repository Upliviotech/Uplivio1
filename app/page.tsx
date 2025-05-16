export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>Welcome to UpLivio</h1>
      <p>We provide modern marketing solutions to help your business grow.</p>
      <h2>Contact Us</h2>
      <form style={{ display: 'flex', flexDirection: 'column', maxWidth: 400 }}>
        <label>Name</label>
        <input type="text" placeholder="Your name" required />
        <label>Email</label>
        <input type="email" placeholder="Your email" required />
        <label>Message</label>
        <textarea placeholder="Your message" rows={4} />
        <button type="submit" style={{ marginTop: '1rem' }}>Send</button>
      </form>
    </main>
  );
}
