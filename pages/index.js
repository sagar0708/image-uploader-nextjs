import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    var form = new FormData();
    const fileField = document.querySelector('input[type="file"]');
    form.append('source', fileField.files[0]);
    form.append('action', 'action');
    form.append('key', '6d207e02198a847aa98d0a2a901485a5');

    fetch('https://freeimage.host/api/1/upload', {
      method: 'POST',
      body: form
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
      })
      .catch((error) => {
        console.error('Error:', error);
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="source"/>
      <input type="hidden" name="action" value="upload"/>
      <input type="hidden" name="key" value="6d207e02198a847aa98d0a2a901485a5" />
      <input type="submit" value="Upload" />
    </form>
  )
}
