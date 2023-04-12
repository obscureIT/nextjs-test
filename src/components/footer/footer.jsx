import React from 'react';
function Footer() {
    return (
        <footer  className="footer pt-10 pb-5 mt-auto bg-dark footer-dark text-white">
        <div  className="container px-5">
           <div  className="row gx-5 pt-5">
              <div  className="col-lg-3">
                 <div  className="footer-brand">SB UI Kit Pro</div>
                 <div  className="mb-3">Build better websites</div>
              </div>
              <div  className="col-lg-9">
                 <div  className="row gx-5">
                    <div  className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                       <div  className="text-uppercase-expanded text-xs mb-4">Product</div>
                       <ul  className="list-unstyled mb-0">
                          <li  className="mb-2"><a className="text-white" href="#">Landing</a></li>
                          <li  className="mb-2"><a className="text-white" href="#">Pages</a></li>
                          <li  className="mb-2"><a className="text-white" href="#">Sections</a></li>
                          <li  className="mb-2"><a className="text-white" href="#">Documentation</a></li>
                          <li ><a className="text-white" href="#">Changelog</a></li>
                       </ul>
                    </div>
                    <div  className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                       <div  className="text-uppercase-expanded text-xs mb-4">Technical</div>
                       <ul  className="list-unstyled mb-0">
                          <li  className="mb-2"><a className="text-white" href="#">Documentation</a></li>
                          <li  className="mb-2"><a className="text-white" href="#">Changelog</a></li>
                          <li  className="mb-2"><a className="text-white" href="#">Theme Customizer</a></li>
                          <li ><a className="text-white" href="#">UI Kit</a></li>
                       </ul>
                    </div>
                    <div  className="col-lg-3 col-md-6 mb-5 mb-md-0">
                       <div  className="text-uppercase-expanded text-xs mb-4">Includes</div>
                       <ul  className="list-unstyled mb-0">
                          <li  className="mb-2"><a className="text-white" href="#">Utilities</a></li>
                          <li  className="mb-2"><a className="text-white" href="#">Components</a></li>
                          <li  className="mb-2"><a className="text-white" href="#">Layouts</a></li>
                          <li  className="mb-2"><a className="text-white" href="#">Code Samples</a></li>
                          <li  className="mb-2"><a className="text-white" href="#">Products</a></li>
                          <li  className="mb-2"><a className="text-white" href="#">Affiliates</a></li>
                          <li ><a className="text-white" href="#">Updates</a></li>
                       </ul>
                    </div>
                    <div  className="col-lg-3 col-md-6">
                       <div  className="text-uppercase-expanded text-xs mb-4">Legal</div>
                       <ul  className="list-unstyled mb-0">
                          <li  className="mb-2"><a className="text-white" href="#">Privacy Policy</a></li>
                          <li  className="mb-2"><a className="text-white" href="#">Terms and Conditions</a></li>
                          <li ><a className="text-white" href="#">License</a></li>
                       </ul>
                    </div>
                 </div>
              </div>
           </div>
           <hr  className="my-5"/>
           <div  className="row gx-5 align-items-center">
              <div  className="col-md-6 small">Copyright © Your Website 2022</div>
              <div  className="col-md-6 text-md-end small"><a className="text-white" href="#">Privacy Policy</a> · <a className="text-white" href="#">Terms &amp; Conditions</a></div>
           </div>
        </div>
     </footer>
    );
  }
  
  export default Footer;
  