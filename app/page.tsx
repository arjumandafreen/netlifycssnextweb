import Feature from "@/components/Feature";
import Homes from "./Homes/page";
import Culture from "./Culture/page";
import Newsletter from "./Contact/page";
import Tour from "./Tours/page";
import Holiday from "./Holiday/page";

export default function Home() {
  return (
    <div>
      <Homes/>
      <Feature/>
      <Holiday/>
      <Tour/>
      <Culture/>
      <Newsletter/>
    </div>
  );
}