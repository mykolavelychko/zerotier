import { formatTimeAgo } from "../../shared/utils";
import { Container, Item, Label } from "./DeviceDetails.styles";

// TODO: add type
const DeviceDetails = ({ device }: { device: any }) => {
  return (
    <Container>
      {device.description && (
        <Item>
          <Label>Description:</Label> {device.description}
        </Item>
      )}
      <Item>
        <Label>Device ID:</Label>
        {device.id}
      </Item>
      <Item>
        <Label>Network ID:</Label>
        {device.networkId}
      </Item>
      <Item>
        <Label>Authorized:</Label>
        {device.config.authorized ? "Yes" : "No"}
      </Item>
      <Item>
        <Label>Last seen:</Label>
        {device.lastSeen ? formatTimeAgo(device.lastSeen) : "Never"}
      </Item>
      <Item>
        <Label>Managed IPs:</Label>
        {device.config.ipAssignments?.join(", ")}
      </Item>
      <Item>
        <Label>Client version:</Label>
        {device.clientVersion}
      </Item>
    </Container>
  );
};

export default DeviceDetails;
