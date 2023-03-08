import { cls } from "./../libs/utls";

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  return (
    <div>
      <div className="fixed top-0 flex w-full items-center justify-center border-b bg-white py-3 text-lg font-medium text-gray-700">
        {title ? <span>{title}</span> : null}
      </div>
      <div className={cls("pt-16", hasTabBar ? "pd-16" : "")}>{children}</div>
      {hasTabBar ? (
        <nav className="pd-10 fixed bottom-0 flex items-center justify-between border-t bg-white pt-3 text-gray-800"></nav>
      ) : null}
    </div>
  );
}
