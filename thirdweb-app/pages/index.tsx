import { ConnectWallet , useStorageUpload , MediaRenderer} from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import { useCallback , useState} from "react";
import {useDropzone} from "react-dropzone";

const Home: NextPage = () => {
  const [uris, setUris] = useState<string[]>([]);
  const {mutateAsync :upload} = useStorageUpload();
  
  const onDrop = useCallback(
    async (acceptedFiles : File[]) => {
      const _uris = await upload({data : acceptedFiles});
      setUris(_uris);
      console.log(_uris);
    },
    [upload]
  )
  const {getRootProps, getInputProps} = useDropzone({ onDrop});
  return (
    <main className={styles.main}>
      <div {...getRootProps()} >
  
        <button {...getInputProps}>Drop files here</button>
      </div>
      {uris.map((uris) =>{
        return(
        
              <MediaRenderer 
          key={uris}
          src={uris}
          width="150px"
          height="150px"

          />
          
       
        )
      })}
    </main>
  );
};

export default Home;
