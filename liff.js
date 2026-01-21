<script src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script>
<script>
async function liffLogin() {
  await liff.init({ liffId: "2008938161-xDsadVsw" })

  if (!liff.isLoggedIn()) {
    liff.login()
    return
  }

  const profile = await liff.getProfile()
  window.LINE_USER = {
    userId: profile.userId,
    name: profile.displayName,
    picture: profile.pictureUrl
  }
}
</script>
