import HTMLFlipBook from 'react-pageflip';
import Page from './Page';

function MyBook(props) {
    return (
        <HTMLFlipBook width={600} height={700} showCover="true">
          <Page number= {1}>
            <div className="demoPage text-white text-3xl">Page 1</div>
          </Page>
          <Page number= {2}>
            <div className="demoPage text-white text-3xl">Page 2</div>
          </Page>
          <Page number= {3}>
            <div className="demoPage text-white text-3xl">Page 3</div>
          </Page>

        </HTMLFlipBook>
    );
}
export default MyBook;