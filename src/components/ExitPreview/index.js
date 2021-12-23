import Link from 'next/link';

export default function ExitPreview() {
  return (
    <Link href="/api/exit-preview">
      <a
        style={{
          position: 'fixed', right: '20px', bottom: '30px',
          backgroundColor: 'coral', padding: '4px 10px'
        }}
      >
        Desativar modo preview</a>
    </Link>
  )
}