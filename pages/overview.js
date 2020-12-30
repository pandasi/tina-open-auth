import Link from 'next/link'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'

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
          getGithubPreviewProps({
            ...previewData,
            fileRelativePath = 'content/admin.json',
            parseJson: parseJson
          })
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