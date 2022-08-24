export default function Footer() {
  return (
    <>
      <div className="w-full h-40 bg-neutral-200 flex justify-around items-center pb-2">
        <div>
          <h3 className="text-xl py-2 font-semibold">HELP & INFORMATION</h3>
          <h4 className="py-1 text-xs">Help</h4>
          <h4 className="py-1 text-xs">Delivery & Returns</h4>
          <h4 className="py-1 text-xs">Sustainability</h4>
        </div>
        <div>
          <h3 className="text-xl py-2 font-semibold">ABOUT SHOP</h3>
          <h4 className="py-1 text-xs">About Us</h4>
          <h4 className="py-1 text-xs">Carrers at SHOP</h4>
          <h4 className="py-1 text-xs">Investors</h4>
        </div>
        <div>
          <h3 className="text-xl py-2 font-semibold">MORE OF SHOP</h3>
          <h4 className="py-1 text-xs">Vouchers</h4>
          <h4 className="py-1 text-xs">SHOP x WHATEVER</h4>
          <h4 className="py-1 text-xs">SHOP near you?</h4>
        </div>
      </div>
      <div className="w-full h-10 bg-neutral-300 flex justify-between px-5">
        <h3 className="text-sm py-2 ">© 2022 SHOP</h3>
        <div className="flex justify-between items-center">
          <h4 className="text-xs">Policies</h4>
          <span className=" px-2 text-xs">|</span>
          <h4 className="text-xs">Work For Us</h4>
          <span className="px-2 text-xs">|</span>
          <h4 className="text-xs">SHOP details</h4>
          <span className="px-2 text-xs">|</span>
          <h4 className="text-xs">Accessibility</h4>
        </div>
      </div>
    </>
  );
}
