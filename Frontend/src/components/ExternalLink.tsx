import React from "react";
import { IIcon } from "types/common";
import IconExternalLink from "assets/icons/IconExternalLink";

type ExternalLinkProps = {
  iconComponent: React.FC<IIcon>,
  title: string,
  url: string,

}

const ExternalLink: React.FC<ExternalLinkProps> = ({iconComponent, title, url}) => {
  return (
    <div className="w-full border border-[#6B7280] bg-[#6B72801A] py-17 px-28 flex justify-between items-center rounded-20 gap-15">
      <div>
        {iconComponent({})}
      </div>
      <div className="text-[#FFF] text-18 font-[600] w-full">{title}</div>
      <a className="" href={url}>
        <IconExternalLink />
      </a>
    </div>
  )
}

export default ExternalLink;