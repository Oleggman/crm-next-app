import { AddCompanyButton } from '@/app/components/addCompanyButton'
import { LogoUploader } from '@/app/components/LogoUploader'
import { Status, StatusLabel } from "./components/statusLabel";

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>NotActive</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      <div style={{marginTop: 8}}>
        <AddCompanyButton />
      </div>
    </main>
  );
}
