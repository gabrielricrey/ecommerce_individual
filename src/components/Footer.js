import NewsLetterSignUp from "./sb/NewsLetterSignUp";
import ServerComponent from "./sb/ServerComponent";

export default function Footer({ data }) {
  const footerClasses = "w-full p-5 bg-[#EFF2F6] flex justify-around";
  return (
    <footer className={footerClasses}>
      <div className="w-full md:w-3/4 flex my-10">
        <NewsLetterSignUp data={data.newsletter_signup[0]} />
        <div className="flex-2 flex justify-center">
          <div className="flex gap-5">
            {data.footer_links_group.map((blok) => (
              <ServerComponent key={blok._uid} blok={blok} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
