import Link from 'next/link';
import Head from 'next/head'



import Header from '../../src/client/layout/header'

function FirstPost() {
  return (
    <div>
        {/* <Head>
            <title>test page</title>
      </Head> */}
      <Header className='header'/>
    </div>
  );
}

export default FirstPost;
