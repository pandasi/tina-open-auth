import Link from 'next/link'

export default function Overview(){
    return(
        <div>
            <p>This is a test site</p>
            <Link href="/">
                <a>Back</a>
            </Link>
        </div>
    )
}
export const getStaticProps = async function ({
    preview,
    previewData,
  }) {
    if (preview) {
      return {
          props: {
              preview: true
          }
      }
    }
    return {
      props: {
        sourceProvider: null,
        error: null,
        preview: false,
        file: {
          fileRelativePath: 'content/home.json',
          data: (await import('../content/home.json')).default,
        },
      },
    }
  }