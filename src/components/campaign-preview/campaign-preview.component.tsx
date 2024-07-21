import { IconType } from "react-icons";
import styles from "./campaign-preview.module.css";
import Link from "next/link";

export interface Campaign {
  name: string;
  icon: IconType;
  url?: string;
  link?: string;
  fileUrl?: string;
}

export default function CampaignPreview(props: { campaign: Campaign }) {
  return props.campaign.fileUrl ? (
    <a
      className={styles.noLink}
      href={props.campaign.fileUrl}
      download={props.campaign.fileUrl}
    >
      <div key={props.campaign.name} className={styles.campaignBox}>
        <props.campaign.icon size={70} className={styles.campaignIcon} />
        <h2 className={styles.campaignName}>{props.campaign.name}</h2>
      </div>
    </a>
  ) : (
    <Link
      {...(props.campaign.link
        ? { href: props.campaign.link }
        : { href: `support-us/campaigns/${props.campaign.url}` })}
      className={styles.noLink}
    >
      <div key={props.campaign.name} className={styles.campaignBox}>
        <props.campaign.icon size={70} className={styles.campaignIcon} />
        <h2 className={styles.campaignName}>{props.campaign.name}</h2>
      </div>
    </Link>
  );
}
