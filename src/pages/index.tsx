import { Text } from "@/lib";
import Card, {
  CardBody,
  CardTextHeading,
  ImageCard,
  ProfileCard,
} from "@/lib/card";
import Grid from "@/lib/grid";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import { getData, postData } from "./api/auth";
import PostModal from "@/components/PostModal";

export default function Home(): ReactElement {
  const [post, setPost] = useState<string>("");
  const [posts, setPosts] = useState<any>([]);

  async function fetchData() {
    const data = await getData();
    setPosts(data);
  }

  useEffect(() => {}, []);

  return (
    <div className="pt-16">
      <h1 className="ml-2 text-3xl font-extrabold md:text-5xl lg:text-6xl">
        <span>
          <div className="text-zinc-800 text-center mb-2 dark:text-zinc-300">
            SELAMAT DATANG!
          </div>

          <div className="mr-2">
            <Grid>
              <Card>
                <CardBody>
                  <CardTextHeading text="APA ITU ANONANCY?" />
                  <div className="text-zinc-800 text-sm dark:text-zinc-300">
                    <div>
                      Anonancy adalah layanan Whistleblowing System untuk
                      memproses pengaduan atas dugaan terjadinya pelanggaran
                      dan/atau kejahatan yang terjadi di lingkungan kampus.
                    </div>
                    <br></br>
                    <div>
                      Anda tidak perlu khawatir terungkapnya identitas diri anda
                      karena kampus akan MERAHASIAKAN IDENTITAS DIRI ANDA
                      sebagai whistleblower. Pihak kampus menghargai informasi
                      yang Anda laporkan. Fokus kami kepada materi informasi
                      yang Anda laporkan.
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardTextHeading text="KRITERIA PENGADUAN?" />
                <div className="text-zinc-800 text-sm dark:text-zinc-300">
                  Pengaduan Anda akan mudah ditindaklanjuti, jika paling sedikit
                  memuat:
                  <br></br>
                  <br></br>
                  <p>- Apa substansi pengaduan</p>
                  <br></br>
                  <p>- Dimana perbuatan tersebut dilakukan </p>
                  <br></br>
                  <p>- Kapan waktu kejadian </p>
                  <br></br>
                  <p>- Siapa pihak yang terlibat</p>
                  <br></br>
                  <p>- Bagaimana kronologis kejadian</p>
                </div>
              </Card>
            </Grid>
          </div>
        </span>
      </h1>

      <PostModal post={post} setPost={setPost}></PostModal>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale as string, [
        "common",
        "header",
      ])),
    },
  };
};
