# Update Audio Player and Logo Visibility

## Goal:
1. Replace the custom audio player in the Strategist section with the provided iframe embed.
2. Ensure the company logo is displayed prominently and clearly in the Header, removing any potential obstructions or redundancies.

## Proposed Changes:

### 1. Update Strategist Section (`src/components/Strategist.tsx`)
- Replace the complex audio player logic (states, refs, custom UI) with the provided Reverb.chat iframe embed.
- Maintain the container layout but simplify it to accommodate the 200px height iframe.
- Keep the headshot and bio text unchanged.

### 2. Enhance Logo Visibility (`src/components/Header.tsx`)
- Increase the logo height in the header for better prominence (from `h-14` to `h-16` or `h-20`).
- Remove the text span "The Authorial Bedrock" next to the logo image to avoid redundancy and ensure the logo is the clear focal point.
- Ensure the logo has proper spacing and is not obscured by the navigation links.

### 3. Verify Logo in Footer (`src/components/Footer.tsx`)
- Similarly, remove the text span next to the logo in the footer to keep branding consistent.
- Ensure the logo size in the footer is appropriate.

## Technical Details:
- Audio Iframe: `<iframe src="https://record.reverb.chat/embed/BrVoiqiF2JAKY3UM9VPq" style="border:0px #ffffff none;" name="myiFrame" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="200px" width="100%" allowfullscreen></iframe>`
- Logo Height: Increase to `h-16` or `h-20` depending on visual balance.
- Remove redundant text labels next to the logo.
