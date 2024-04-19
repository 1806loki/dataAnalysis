import { Table, Text, Badge } from '@mantine/core';
import { ALCOHOL_CLASSES } from '../config/constants';
import { calculateMean, calculateMedian, calculateMode } from '../services/statisticsService';
import { NewWineData } from '../models/WineData';

const WineDataStatisticsTable = ({ wineData, property }: { wineData: NewWineData[], property: string }) => {

    return (
        <Table style={{ minWidth: 600, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, marginBottom: 10, borderCollapse: 'collapse', borderSpacing: 5, textAlign: 'center' }}>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th style={{ border: '1px solid #dee2e6', padding: '8px' }}>Measure</Table.Th>
                    {ALCOHOL_CLASSES.map((data) => {
                        return <Table.Th key={data} style={{ border: '1px solid #dee2e6', padding: '8px' }}>Class {data}</Table.Th>
                    })}
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                <Table.Tr>
                    <Table.Td style={{ border: '1px solid #dee2e6', padding: '8px' }}><Text size="sm">{property} Mean</Text></Table.Td>
                    {ALCOHOL_CLASSES.map((value) => {
                        return <Table.Td key={value} style={{ border: '1px solid #dee2e6', padding: '8px' }}>{calculateMean(wineData, property, value)}</Table.Td>
                    })}
                </Table.Tr>
                <Table.Tr>
                    <Table.Td style={{ border: '1px solid #dee2e6', padding: '8px' }}><Text size="sm">{property} Median</Text></Table.Td>
                    {ALCOHOL_CLASSES.map((value) => {
                        return <Table.Td key={value} style={{ border: '1px solid #dee2e6', padding: '8px' }}>{calculateMedian(wineData, property, value)}</Table.Td>
                    })}
                </Table.Tr>
                <Table.Tr>
                    <Table.Td style={{ border: '1px solid #dee2e6', padding: '8px' }}><Text size="sm">{property} Mode</Text></Table.Td>
                    {ALCOHOL_CLASSES.map((value) => {
                        return <Table.Td key={value} style={{ border: '1px solid #dee2e6', padding: '8px' }}>
                            <Badge variant="outline" color="cyan">{calculateMode(wineData, property, value)}</Badge>
                        </Table.Td>
                    })}
                </Table.Tr>
            </Table.Tbody>
        </Table>
    );
};

export default WineDataStatisticsTable;
