function Footer()
{
  return(
    <div className="z-5 flex items-center justify-center bottom-0 w-full h-10 bg-blue-950">
      <p>
        &copy; {new Date().getFullYear} Arka Saha. All rights reserved.
      </p>
    </div>
  );
}
export default Footer;