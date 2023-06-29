import { Link } from "./Link";
import { VersionGroupDetail } from "./VersionGroupDetail";

export interface Move {
    move:                  Link;
    version_group_details: VersionGroupDetail[];
}