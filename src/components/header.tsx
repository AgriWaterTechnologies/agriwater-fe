import { ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

type HeaderProps = {
  disableBackButton?: boolean;
  title?: string;
};

export function Header({ disableBackButton = false, title = "" }: HeaderProps) {
  const navigate = useNavigate();

  const { pathname } = useLocation();
  
  return (
    <div className="w-full fixed top-0 left-0 right-0 justify-center flex z-50">
      <header className="w-full max-w-4xl flex items-center h-20 px-4 gap-4 font-medium text-green800 text-2xl bg-white">
        <div
          className="w-fit flex items-center justify-between cursor-pointer gap-3"
          onClick={!disableBackButton && pathname !== "/" ? () => navigate(-1) : undefined}
        >
          {!disableBackButton && pathname !== "/" && (
            <div className="cursor-pointer flex items-center gap-2">
              <ArrowLeft size={22} />
            </div>
          )}
          {title}
        </div>
      </header>
    </div>
  );
}
