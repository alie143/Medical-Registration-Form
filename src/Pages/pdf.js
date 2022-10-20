import jsPDF  from "jspdf"
import Body from "../Components/Body";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useEffect } from "react";


const Pdf = () => {

    // useEffect(() => {
    //     pdf();
    //   }, []);

// const pdf = () =>{
    const doc = new jsPDF();

        doc.text("Hello World!", 10, 10);
        doc.save("a4.pdf");
// }

    const generate = () => {
        let pdfName='pdf' + '_' + 'genrated' +".pdf"
  console.log(pdfName)
    var doc = new jsPDF("p","pt","a4")
    doc.html(document.querySelector("#ticket"),{
        callback: function(pdf){
            pdf.save(pdfName)
        }
    })

    }
    return (
      <>
        <Header />
        <h1>On pdf page.</h1>
        <Footer />
      </>
    );
  };
  export default Pdf;