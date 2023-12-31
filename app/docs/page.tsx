import SideMenu from "@/components/SideMenu";

export default function Home() {
  return (
    <main>
      <div className="flex">
        <SideMenu />
        <div className="px-8 h-screen pt-8">
          <h1 className="text-5xl">Documents</h1>
        </div>
      </div>
    </main>
  );
}
