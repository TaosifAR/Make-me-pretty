function Footer()
{
return(
    <footer className="footer grid-cols-1 md:grid-cols-3 p-10 bg-white text-base-content text">
  <nav>
  <header className="footer-title font-bold">Company</header> 
    <ul><a href="http://localhost:5173/contact-us">Contact Us</a></ul>
       <ul><a href="http://localhost:5173/manage-product">Manage Product</a></ul>
      <ul><a href="http://localhost:5173/add-product">Add Product</a></ul>
  </nav> 
  <nav>
  <header className="footer-title font-bold">Social</header> 
    <div className="grid grid-flow-col gap-4">
     <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a href="https://www.facebook.com/makemepretty24?mibextid=hIlR13"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
   
  </nav> 
  <nav>
  <header className="footer-title font-bold">Terms of Use</header> 
  <p> By accessing this website, you agree to comply with and be bound by the following terms and conditions of use. Please read these terms carefully before using our website. If you do not agree with any part of these terms, please do not use our website.</p>
  
  </nav>
</footer>

)
}
export default Footer;