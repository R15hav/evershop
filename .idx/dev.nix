{ pkgs, ... }: {

  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_20
    pkgs.postgresql_14
  ];

  # Set environment variables
  env = {
    # DB_HOST= "dpg-coj3jp0l5elc73dh1evg-a.singapore-postgres.render.com";
    # DB_PORT= 5432;
    # DB_PASSWORD= "qIWoiAAWeQlpBAnYvs4uKYODEVtPMXNU";
    # DB_USER= "test_db";
    # DB_NAME= "test_db_bcii";
  };

  # Enable previews and customize configuration
  idx.previews = {
    enable = true;
    previews = [
      {
        command = [
          "npm"
          "run"
          "start"
          "--"
          "--port"
          "$PORT"
          "--host"
          "0.0.0.0"
          "--disable-host-check"
        ];
        manager = "web";
        id = "web";
      }
    ];
  };
}