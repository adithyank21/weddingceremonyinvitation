Add-Type -AssemblyName System.Drawing

function New-AbstractImage($width, $height, $filename) {
    $img = New-Object System.Drawing.Bitmap $width, $height
    $g = [System.Drawing.Graphics]::FromImage($img)
    $g.Clear([System.Drawing.Color]::FromArgb(255, 248, 238))

    $bg1 = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 241, 215, 168))
    $g.FillEllipse($bg1, 120, 180, 640, 680)

    $bg2 = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 231, 191, 129))
    $g.FillEllipse($bg2, 250, 140, 390, 620)

    $maroon = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 122, 31, 45))
    $g.FillEllipse($maroon, 280, 220, 280, 560)

    $gold = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 197, 157, 63))
    $g.FillEllipse($gold, 160, 220, 140, 140)
    $g.FillEllipse($gold, 690, 260, 140, 140)
    $g.FillEllipse($gold, 200, 780, 110, 110)
    $g.FillEllipse($gold, 710, 820, 110, 110)

    $dark = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 79, 17, 28))
    $g.FillEllipse($dark, 280, 340, 340, 560)

    $accent = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 244, 212, 140))
    $g.FillEllipse($accent, 250, 130, 24, 24)
    $g.FillEllipse($accent, 655, 140, 24, 24)
    $g.FillEllipse($accent, 215, 720, 24, 24)
    $g.FillEllipse($accent, 720, 760, 24, 24)

    $g.Dispose()
    $img.Save($filename, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $img.Dispose()
}

New-AbstractImage 900 1200 '1.jpeg'
New-AbstractImage 1400 900 '2.jpeg'
Write-Output 'created'
