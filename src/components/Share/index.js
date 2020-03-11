/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved, import/extensions, import/no-extraneous-dependencies */
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import {
  FacebookShareCount,
  RedditShareCount,
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  PocketShareButton,
  InstapaperShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  MailruIcon,
  EmailIcon,
  LivejournalIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon
} from "react-share";

class Share extends Component {
  render() {
    const shareUrl = document.URL;
    const title = document.title;

    console.log("DOCUMENT URL", shareUrl);
    console.log("DOCUMENT TITLE", title);

    return (
      <>
        <h1>Share this page</h1>
        <Grid container spacing={3}>
          <Grid item xs>
            <FacebookShareButton url={shareUrl} quote={title}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <FacebookShareCount
              url={shareUrl}
              className="Demo__some-network__share-count"
            >
              {count => count}
            </FacebookShareCount>
          </Grid>
          <Grid item xs>
            <TwitterShareButton url={shareUrl} title={title}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <div className="Demo__some-network__share-count">&nbsp;</div>
          </Grid>
          <Grid item xs>
            <TelegramShareButton url={shareUrl} title={title}>
              <TelegramIcon size={32} round />
            </TelegramShareButton>
            <div className="Demo__some-network__share-count">&nbsp;</div>
          </Grid>
          <Grid item xs>
            <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>

            <div className="Demo__some-network__share-count">&nbsp;</div>
          </Grid>
          <Grid item xs>
            <LinkedinShareButton url={shareUrl}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </Grid>

          <Grid item xs>
            <RedditShareButton
              url={shareUrl}
              title={title}
              windowWidth={660}
              windowHeight={460}
            >
              <RedditIcon size={32} round />
            </RedditShareButton>

            <div>
              <RedditShareCount
                url={shareUrl}
                className="Demo__some-network__share-count"
              />
            </div>
          </Grid>
          <Grid item xs>
            <MailruShareButton url={shareUrl} title={title}>
              <MailruIcon size={32} round />
            </MailruShareButton>
          </Grid>
          <Grid item xs>
            <EmailShareButton url={shareUrl} subject={title} body="body">
              <EmailIcon size={32} round />
            </EmailShareButton>
          </Grid>
          <Grid item xs>
            <ViberShareButton url={shareUrl} title={title}>
              <ViberIcon size={32} round />
            </ViberShareButton>
          </Grid>
          <Grid item xs>
            <WorkplaceShareButton url={shareUrl} quote={title}>
              <WorkplaceIcon size={32} round />
            </WorkplaceShareButton>
          </Grid>
          <Grid item xs>
            <LineShareButton url={shareUrl} title={title}>
              <LineIcon size={32} round />
            </LineShareButton>
          </Grid>
          <Grid item xs>
            <PocketShareButton url={shareUrl} title={title}>
              <PocketIcon size={32} round />
            </PocketShareButton>
          </Grid>
          <Grid item xs>
            <InstapaperShareButton url={shareUrl} title={title}>
              <InstapaperIcon size={32} round />
            </InstapaperShareButton>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Share;
