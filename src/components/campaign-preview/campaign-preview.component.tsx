import { IconType } from "react-icons";
import styles from "./campaign-preview.module.css";
import Link from "next/link";

export interface Campaign {
  name: string;
  icon: IconType;
  url: string;
}

export default function CampaignPreview(props: { campaign: Campaign }) {
  return (
    <Link
      href={`support-us/campaigns/${props.campaign.url}`}
      className={styles.noLink}
    >
      <div key={props.campaign.name} className={styles.campaignBox}>
        <props.campaign.icon size={70} className={styles.campaignIcon} />
        <h2 className={styles.campaignName}>{props.campaign.name}</h2>
      </div>
    </Link>
  );
}
