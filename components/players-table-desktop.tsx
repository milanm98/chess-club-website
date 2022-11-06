/* eslint-disable @typescript-eslint/no-explicit-any */
const PlayersTableDesktop = ({ players }: any) => {
  return (
    <div className="overflow-auto rounded-lg  hidden md:block">
      <table className="m-auto">
        <thead className="bg-gray-50 border-b-2 border-gray-200 ">
          <tr className="text-center">
            <th className="p-3 text-sm font-semibold tracking-wide ">
              Ime igrača
            </th>
            <th className="w-24 p-3 text-sm font-semibold tracking-wide ">
              Standard
            </th>
            <th className="w-24 p-3 text-sm font-semibold tracking-wide">
              Rapid
            </th>
            <th className="w-32 p-3 text-sm font-semibold tracking-wide ">
              Blitz
            </th>
            <th className="w-32 p-3 text-sm font-semibold tracking-wide">
              Lichess nalog
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-center">
          {players.map((player: any) => {
            return (
              <tr key={player.id} className="bg-white even:bg-grey">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {player.name + ' ' + player.lastName}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {player.standard || '-'}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {player.rapid || '-'}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {player.blitz || '-'}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {player.lichessAcc || '-'}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default PlayersTableDesktop
