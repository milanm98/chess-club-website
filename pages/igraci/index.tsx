import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Layout from '../../components/layout'

const players = [
  {
    id: '1',
    name: 'Jovan',
    lastName: 'Dragić',
    standard: '2018',
    rapid: '',
    blitz: '',
    lichessAcc: '',
  },
  {
    id: '2',
    name: 'Stefan',
    lastName: 'Ristić',
    standard: '2041',
    rapid: '2016',
    blitz: '1903',
    lichessAcc: 'SKG_Stefan',
  },
  {
    id: '3',
    name: 'Aleksandar',
    lastName: 'Tot',
    standard: '1996',
    rapid: '1835',
    blitz: '',
    lichessAcc: 'AleksandarTot',
  },
  {
    id: '4',
    name: 'Stefan',
    lastName: 'Kostić',
    standard: '1968',
    rapid: '1950',
    blitz: '1899',
    lichessAcc: '',
  },
  {
    id: '5',
    name: 'Milan',
    lastName: 'Jatić',
    standard: '1965',
    rapid: '',
    blitz: '',
    lichessAcc: '',
  },
  {
    id: '6',
    name: 'Darko',
    lastName: 'Milešević',
    standard: '1830',
    rapid: '1881',
    blitz: '1924',
    lichessAcc: 'Duke01',
  },
  {
    id: '7',
    name: 'Iva',
    lastName: 'Uzelac',
    standard: '1824',
    rapid: '',
    blitz: '',
    lichessAcc: '',
  },
  {
    id: '8',
    name: 'Zoran',
    lastName: 'Milanović',
    standard: '1819',
    rapid: '1799',
    blitz: '1776',
    lichessAcc: '',
  },
  {
    id: '9',
    name: 'Sergej',
    lastName: 'Manojlović',
    standard: '1737',
    rapid: '1953',
    blitz: '1496',
    lichessAcc: 'SergejM2',
  },
  {
    id: '10',
    name: 'Nemanja',
    lastName: 'Višekruna',
    standard: '1725',
    rapid: '1601',
    blitz: '1670',
    lichessAcc: 'nemanjaa95',
  },
  {
    id: '11',
    name: 'Milan',
    lastName: 'Trifunović',
    standard: '1674',
    rapid: '1737',
    blitz: '1453',
    lichessAcc: 'Milan833',
  },
  {
    id: '12',
    name: 'Ivan',
    lastName: 'Tot',
    standard: '1621',
    rapid: '1629',
    blitz: '1544',
    lichessAcc: 'TotBP',
  },
  {
    id: '13',
    name: 'Martin',
    lastName: 'Hložan',
    standard: '1610',
    rapid: '1548',
    blitz: '',
    lichessAcc: 'ori2g',
  },
  {
    id: '14',
    name: 'Siniša',
    lastName: 'Matić',
    standard: '1602',
    rapid: '1544',
    blitz: '1502',
    lichessAcc: '',
  },
  {
    id: '15',
    name: 'Stefan',
    lastName: 'Pejak',
    standard: '1597',
    rapid: '1600',
    blitz: '',
    lichessAcc: 'EmilijaPejak2412',
  },
  {
    id: '16',
    name: 'Milan',
    lastName: 'Marjanov',
    standard: '1587',
    rapid: '1625',
    blitz: '',
    lichessAcc: 'SKG_Marry98',
  },
  {
    id: '17',
    name: 'Damir',
    lastName: 'Kordeloš',
    standard: '1546',
    rapid: '1570',
    blitz: '',
    lichessAcc: 'Damir-Kordelos, GabrielBatigol, Damir_bog_saha',
  },
  {
    id: '18',
    name: 'Svetislav',
    lastName: 'Vulikić',
    standard: '1532',
    rapid: '1599',
    blitz: '1484',
    lichessAcc: '',
  },
  {
    id: '19',
    name: 'Nedeljko',
    lastName: 'Duvnjak',
    standard: '1526',
    rapid: '1481',
    blitz: '',
    lichessAcc: 'nedeljkoduvnjak',
  },
  {
    id: '20',
    name: 'Bogdan',
    lastName: 'Vla',
    standard: '1498',
    rapid: '1491',
    blitz: '',
    lichessAcc: '',
  },
  {
    id: '21',
    name: 'Lazar',
    lastName: 'Stanojević',
    standard: '1497',
    rapid: '1313',
    blitz: '',
    lichessAcc: 'lakisa03',
  },
  {
    id: '22',
    name: 'Đorđe',
    lastName: 'Ružičin',
    standard: '1494',
    rapid: '',
    blitz: '1493',
    lichessAcc: '',
  },
  {
    id: '23',
    name: 'Vuk',
    lastName: 'Šijakov',
    standard: '1438',
    rapid: '1468',
    blitz: '',
    lichessAcc: '',
  },
  {
    id: '24',
    name: 'Ivan',
    lastName: 'Rajšp',
    standard: '1376',
    rapid: '1501',
    blitz: '',
    lichessAcc: 'ivanrajsp23',
  },
  {
    id: '25',
    name: 'Sreten',
    lastName: 'Ristić',
    standard: '1361',
    rapid: '1537',
    blitz: '',
    lichessAcc: '',
  },
  {
    id: '26',
    name: 'Milana',
    lastName: 'Kovač',
    standard: '1318',
    rapid: '1406',
    blitz: '',
    lichessAcc: '',
  },
  {
    id: '27',
    name: 'Miloš',
    lastName: 'Ignjatov',
    standard: '',
    rapid: '1565',
    blitz: '',
    lichessAcc: 'Ignjatov91',
  },
  {
    id: '28',
    name: 'Nikola',
    lastName: 'Boškov',
    standard: '',
    rapid: '1528',
    blitz: '',
    lichessAcc: 'DryCheese1',
  },
  {
    id: '29',
    name: 'Branislav',
    lastName: 'Šafarik',
    standard: '',
    rapid: '1402',
    blitz: '',
    lichessAcc: 'BranislavSafarik7',
  },
  {
    id: '30',
    name: 'Miljan',
    lastName: 'Dujović',
    standard: '',
    rapid: '1399',
    blitz: '1564',
    lichessAcc: 'LSVzvezdica',
  },
]

const Igraci = () => {
  return (
    <Layout>
      <TableContainer
        sx={{
          maxWidth: 1000,
          margin: 'auto',
          marginTop: 15,
        }}
        component={Paper}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Ime igrača</TableCell>
              <TableCell align="center">Standard</TableCell>
              <TableCell align="center">Rapid</TableCell>
              <TableCell align="center">Blitz</TableCell>
              <TableCell align="center">Lichess nalog</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map((player) => (
              <TableRow
                key={player.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">
                  {player.name} {player.lastName}
                </TableCell>
                <TableCell align="center">{player.standard || '-'}</TableCell>
                <TableCell align="center">{player.rapid || '-'}</TableCell>
                <TableCell align="center">{player.blitz || '-'}</TableCell>
                <TableCell align="center">{player.lichessAcc || '-'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  )
}

export default Igraci
