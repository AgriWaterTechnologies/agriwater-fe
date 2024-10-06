type HeaderProps = {
  disableBackButton?: boolean;
  title?: string;
};

export function Header({ disableBackButton = false, title = "" }: HeaderProps) {
  return (
    <header className="w-full flex items-center h-20 px-6 justify-between font-medium text-green800 text-2xl">
      {title}
    </header>
  );
}
