import { ConnectWallet , useStorageUpload} from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import { useCallback } from "react";

const Home: NextPage = () => {
  const {mutateAsync :upload} = useStorageUpload();
  const onDrop = useCallback(
    async (acceptedFiles : File[]) => {
      const uris = await upload({data : acceptedFiles});
      console.log(uris);
    }
    [upload],
  )
  const {getRootProps, getInputProps} = useDropzone({ onDrop});
  return (
    <main className={styles.main}>
      <div {...getRootProps()} className={styles.container}>
        <input {...getInputProps}/>
        <p>Drop files here</p>
      </div>
    </main>
  );
};

export default Home;
