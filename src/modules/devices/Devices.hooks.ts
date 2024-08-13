import { useQuery } from "react-query";
import axios from "axios";
import { ZEROTIER_TOKEN } from "../../shared/constants";

const headers = {
  Authorization: `bearer ${ZEROTIER_TOKEN}`,
};

const fetchNetworks = () => {
  return axios
    .get("/api/v1/network", { headers })
    .then((response) => response.data);
};

const fetchMembers = (networkId: string) => {
  return axios
    .get(`/api/v1/network/${networkId}/member`, { headers })
    .then((response) => response.data);
};

const fetchNetworksAndMembers = () => {
  return fetchNetworks().then((networks) => {
    return Promise.all(
      networks.map((network: any) => {
        return fetchMembers(network.id).then((members) => ({
          ...network,
          members,
        }));
      })
    );
  });
};

// TODO: add types
export const useDevices = () => {
  return useQuery("devices", fetchNetworksAndMembers);
};
