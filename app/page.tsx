import Homes from "./Homes/page";
import Feature from "@/components/Feature";
import Holiday from "./Holiday/page";
import Tour from "./Tours/page";
import Culture from "./Culture/page";
import Newsletter from "./Contact/page";

export default function Home() {
  return (
    <div>
      <Homes />
      <Feature />
      <Holiday />
      <Tour />
      <Culture />
      <Newsletter />
    </div>
  );
}
