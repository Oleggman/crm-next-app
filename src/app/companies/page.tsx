import { AddCompanyButton } from '@/app/components/addCompanyButton'
import CompanyRow from '@/app/components/companyRow'
import CompanyTable from '@/app/components/companyTable'
import Header from '@/app/components/header'
import SearchInput from '@/app/components/searchInput'
import { Status } from '@/app/components/statusLabel'
import Toolbar from '@/app/components/toolbar'

export interface PageProps {}

export default function Page ({}: PageProps) {
	return (
		<main>
			<Header>Companies</Header>
			<Toolbar action={<AddCompanyButton />}>
				<SearchInput />
			</Toolbar>
			<CompanyTable>
				<CompanyRow
					id={1}
					category="Products"
					company="Costco"
					status={Status.Pending}
					promotion={true}
					country="USA"
					joinedDate="01.06.2022"
				/>
			</CompanyTable>
		</main>
	);
}