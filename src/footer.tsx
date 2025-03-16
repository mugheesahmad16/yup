export default function Footer() {
  return (
    <div className="flex sm:flex hidden sm:block flex-row sm:flex sm:flex-col w-full h-full pt-14 pb-4 bg-[#FAFAFA]">
      <div className="max-w-[1240px] mx-auto w-full px-5">
        <div className="grid grid-cols-12 w-full h-full">
          {/* logo */}
          <div className="flex flex-col col-span-6 ">
            <img
              src="/images/logo.svg"
              className="min-w-[20px] max-w-[200px] w-[100px] sm:w-[165px]"
              alt=""
            />
            {/* contact information */}
            <div className="col-span-5 flex flex-col pt-24">
              <p className="font-poppins text-[11px] font-poopins  font-[400] max-w-[300px]">
                YUP è un brand di HWYL s.r.l. startup innovativa P. IVA
                06279640657 - hwyl@pec.it - +39 335 70 82 691 Sede legale Via
                Adriano Aurofino 22, Salerno 84127
              </p>
              <br />
              <p className="font-poppins text-[11px] font-[400] leading-normal max-w-[400px]">
                Il progetto è cofinanziato da “PR CAMPANIA FESR 2021-2027 Asse I
                - Obiettivo Specifico 1.1 –Azione 1.1.3 – Avviso pubblico
                CAMPANIA STARTUP 2023” - Numero di CUP B58I23006080007
              </p>
            </div>
            {/* Year Up Project */}
            <div className="flex flex-row gap-x-10 mt-6">
              <p className="text-[14px]">© 2025 Yup</p>
            </div>
          </div>

          {/* menu */}
          <div className="col-span-6 flex flex-col">
            <div className="grid grid-cols-12 justify-items-start">
              <div className="flex flex-col gap-2 col-span-6 font-poppins text-[15px] leading-normal">
                <h1 className="font-[500]">Menu</h1>
                <a href="">
                  <p>Home</p>
                </a>
                <a href="">
                  <p>Come fuziona</p>
                </a>
                <a href="">
                  <p>Blog</p>
                </a>
              </div>
              {/* socials */}
              <div className="flex flex-col gap-2 col-span-6 font-poppins text-[15px] font-[400] leading-normal">
                <h1 className="font-[500]">Social</h1>
                <a href="">
                  <p>Instagram</p>
                </a>
                <a href="">
                  <p>Facebook</p>
                </a>
                <a href="">
                  <p>Linkedin</p>
                </a>
              </div>
            </div>
            {/* flags row */}
            <div className="flex flex-row col-span-7 gap-2 mt-14 justify-start items-center gap-4">
              <a href="">
                <img
                  src="/images/europeflag.png"
                  className="min-w-[20px] max-w-[85px]"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  src="/images/regionecampania.png"
                  className="min-w-[20px] max-w-[85px]"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  src="/images/republicitaliana.png"
                  className="min-w-[20px] max-w-[85px]"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  src="/images/coesione.png"
                  className="min-w-[20px] max-w-[75px]"
                  alt=""
                />
              </a>
            </div>
            <div className="flex flex-row gap-x-10 mt-14 text-[14px]">
              <a href="">
                <p>Termine e condizioni</p>
              </a>
              <a href="">
                <p>Privacy policy</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
