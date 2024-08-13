import { Fragment, useState } from "react";

import DeviceDetails from "../device-details/DeviceDetails";
import { useDevices } from "./Devices.hooks";
import {
  Container,
  Table,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "./Devices.styles";

const Devices = () => {
  const { data, error, isLoading } = useDevices();
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  if (isLoading) {
    return <div>Loading...</div>; // TODO: localization
  }

  if (error) {
    return <div>Error loading devices</div>;
  }

  const members = data?.flatMap((network: any) =>
    network.members.map((member: any) => ({
      ...member,
      networkId: network.id,
      networkName: network.config.name,
    }))
  );

  const toggleRow = (id: string) => {
    setExpandedRows((prev) => {
      const newExpandedRows = new Set(prev);
      if (newExpandedRows.has(id)) {
        newExpandedRows.delete(id);
      } else {
        newExpandedRows.add(id);
      }
      return newExpandedRows;
    });
  };

  return (
    <Container>
      <h2>Zero Tier Devices</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Device Name</TableHeaderCell>
            <TableHeaderCell>Physical Address</TableHeaderCell>
            <TableHeaderCell>Network Name</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <tbody>
          {members?.map((member: any) => (
            <Fragment key={member.id}>
              <TableRow onClick={() => toggleRow(member.id)}>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.physicalAddress}</TableCell>
                <TableCell>{member.networkName}</TableCell>
              </TableRow>
              {expandedRows.has(member.id) && (
                <tr>
                  <TableCell colSpan={3}>
                    <DeviceDetails device={member} />
                  </TableCell>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Devices;
