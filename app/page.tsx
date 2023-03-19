import Link from 'next/link'

function P() {
  return (
    <div>
      page
      <div>
        <Link href="/appList">app list</Link>
        <br />
        <Link href="/longList">long list</Link>
        {/* <Link href */}
      </div>
    </div>
  )
}

export default P
