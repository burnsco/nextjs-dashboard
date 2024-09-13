export default function CustomersPage() {
	return (
		<div>
			<div className="text-5xl font-extrabold">
				<span className="box-decoration-slice shadow-md italic bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ">
					Customers Page
				</span>


			</div>
			<table className="p-2 table-auto">
				<caption className="caption-top">
					Table 3.1: Professional wrestlers and their signature moves.
				</caption>
				<thead>
					<tr>
						<th>Wrestler</th>
						<th>Signature Move(s)</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>"Stone Cold" Steve Austin</td>
						<td>Stone Cold Stunner, Lou Thesz Press</td>
					</tr>
					<tr>
						<td>Bret "The Hitman" Hart</td>
						<td >The Sharpshooter</td>
					</tr>
					<tr>
						<td>Razor Ramon</td>
						<td>Razor's Edge, Fallaway Slam</td>
					</tr>
				</tbody>
			</table>
		</div>
	)

}
