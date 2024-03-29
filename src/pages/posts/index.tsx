import Head from 'next/head';
import { DefaultLayout } from 'src/views/DefaultLayout';
import { Posts } from 'src/views/components/Posts';


export default function Home() {
	return (
		<>
			<Head>
				<title>Lireddit</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<DefaultLayout>
					<Posts />
				</DefaultLayout>
			</main>
		</>
	);
}
